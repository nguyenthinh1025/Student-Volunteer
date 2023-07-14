import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { CreateAchivementAction, DeleteAchivementAction, GetListAchivementAction, UpdateAchivementAction } from './../../redux/actions/AchivementAction';
import { useDispatch, useSelector } from 'react-redux';
import { storage_bucket } from './../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { CreateRoleAction, GetListRoleAction } from '../../redux/actions/RoleAction';

export default function Role () {
    const dispatch = useDispatch()
    const { arrRole } = useSelector(root => root.RoleReducer)
    console.log(arrRole);
    const [id, setID] = useState('abc')
    let counter = 0;
    let emptyProduct = {
        roleId: counter.toString(),
        roleName: "",
        description: ""
    };

    const uploadFile = (e) => {
        let file = e.target.files[0];
        let fileRef = ref(storage_bucket, file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            // console.log(snapshot);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    const updatedProduct = { ...product, achivementLogo: url }; // Update achivementLogo property in product object
                    setProduct(updatedProduct);
                });
            });
    };

    const [text, setText] = useState('Add New')
    const [products, setProducts] = useState([]);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    console.log(product);
    useEffect(() => {
        const action = GetListRoleAction();
        dispatch(action)
    }, []);
    useEffect(() => {

        setProducts(arrRole)
    }, [arrRole]);

    // const formatCurrency = (value) => {
    //     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);

    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = async () => {
        setSubmitted(true);

        if (product.description.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.roleId !== '0') {
                const index = findIndexById(product.id);

                _products[index] = _product;
                console.log(product.roleId);
                // const action = await UpdateAchivementAction(product)
                // await dispatch(action)
                setProductDialog(false);
                counter++;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Updated Role', life: 3000, });

            } else {
                const action = await CreateRoleAction(product)
                await dispatch(action)
                counter++;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Created Role', life: 3000 });


            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct)


        }
    };

    const editProduct = (product) => {
        setText('Edits')
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = async () => {

        const action = await DeleteAchivementAction(product.achivementId)
        await dispatch(action)
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({
            severity: 'error', summary: 'Successful', detail: 'Deleted Achivement', life: 3000, options: {
                style: {
                    zIndex: 100
                }
            }
        });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0;i < products.length;i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0;i < 5;i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Deleted  Achivement', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e, name) => {
        // if (name === 'achivementLogo') {
        //     uploadFile(e); // Call uploadFile function when achivementLogo value changes
        // }

        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };
    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        if (val < 0) {
            // Giá trị nhập vào nhỏ hơn 0
            return; // Hoặc bạn có thể xử lý theo ý muốn khác ở đây
        }
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Thêm Mới" icon="pi pi-plus" severity="success" onClick={openNew} />
                {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Tải Xuống" icon="pi pi-upload" style={{ marginRight: '50px' }} className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`${rowData.achivementLogo}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return
        // return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0 mb-4">Quản Lý Vai Trò</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Tìm Kiếm..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );
    console.log(product);
    return (
        <div className="app-main__outer" style={{ margin: '20px 30px' }}>
            <div>
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
                        {/* <Column selectionMode="multiple" exportable={false}></Column> */}
                        <Column field="roleId" header="Mã" sortable style={{ minWidth: '11rem' }}></Column>
                        <Column field="roleName" header="Tên Vai Trò" sortable style={{ minWidth: '11rem' }}></Column>
                        <Column field="description" header="Miêu Tả" sortable style={{ minWidth: '12rem' }}></Column>
                        {/* <Column field={createAt => moment(createAt.createAt).format('DD-MM-YYYY')} header="Day" sortable style={{ minWidth: '12rem' }}></Column> */}
                        {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                        <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem', marginRight: '100px' }}></Column>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={text} modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>

                    <label htmlFor="description" className="font-bold">
                        Name
                    </label>
                    {product.roleId === '0' ? <InputText id="roleName" value={product.roleName} onChange={(e) => onInputChange(e, 'roleName')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.roleName })} />
                        :
                        <div className="field">
                            <select id="roleName" name="m" className="custom-select">
                                <option value="property">Properties</option>
                                <option value="todo">Todos</option>
                                <option value="landlord">Landlords</option>
                                <option value="offer">Offers</option>
                                <option value="opportunity">Opportunities</option>
                            </select>
                        </div>}
                    <div className="field">
                        <label htmlFor="description" className="font-bold">
                            Description
                        </label>
                        <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        {/* {submitted && !product.description && <small className="p-error">Name is required.</small>} */}
                    </div>




                </Dialog>

                <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {product && (
                            <span>
                                Are you sure you want to delete <b>{product.name}</b>?
                            </span>
                        )}
                    </div>
                </Dialog>

                <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {product && <span>Are you sure you want to delete the selected products?</span>}
                    </div>
                </Dialog>
            </div>

        </div>

    )
}
