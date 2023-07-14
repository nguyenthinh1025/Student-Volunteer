import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { useDispatch, useSelector } from 'react-redux';
import { storage_bucket } from './../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { CreateProcessTypeAction, DeleteProcessTypeAction, GetListProcessTypeAction, UpdateProcessTypeAction } from '../../redux/actions/ProcessTypeAction';

export default function ProcessType () {
    const dispatch = useDispatch()
    const { processType } = useSelector(root => root.ProcessTypeReducer)
    console.log(processType);
    let emptyProduct = {
        processTypeId: "0",
        processTypeName: "",
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

    const [text, setText] = useState('Thêm Mới Loại Tiến Trình')
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
    console.log(selectedProducts);
    useEffect(() => {
        const action = GetListProcessTypeAction();
        dispatch(action)
    }, []);
    useEffect(() => {

        setProducts(processType)
    }, [processType]);
    console.log(products);

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

            if (product.processTypeId !== '0') {
                const index = findIndexById(product.id);

                _products[index] = _product;
                console.log(product.processTypeId);
                const action = await UpdateProcessTypeAction(product)
                await dispatch(action)
                setProductDialog(false);
                toast.current.show({ severity: 'success', summary: 'Thành Công', detail: `Cập Nhật Loại Tiến Trình ${product.processTypeId} Thành Công`, life: 3000, });

            } else {
                const action = await CreateProcessTypeAction(product)
                await dispatch(action)
                toast.current.show({ severity: 'success', summary: 'Thành Công', detail: 'Tạo  Mới Loại Tiến Trình Thành Công', life: 3000 });

            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct)
        }
    };

    const editProduct = (product) => {
        setText('Chỉnh Sửa Loại Tiến Trình')
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = async () => {

        const action = await DeleteProcessTypeAction(product.processTypeId)
        await dispatch(action)
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({
            severity: 'error', summary: 'Thành Công', detail: `Xóa Loại Tiến Trình ${product.processTypeId} Thành Công`, life: 3000, options: {
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
        if (name === 'achivementLogo') {
            uploadFile(e); // Call uploadFile function when achivementLogo value changes
        }

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
            <h4 className="m-0 mb-4">Quản Lý Loại Tiến Trình</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Tìm Kiếm..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Hủy Bỏ" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Hoàn Thành" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="Hủy Bỏ" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Đồng Ý" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
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
                        currentPageReportTemplate="Đang hiển thị {first} đến {last} trong tổng số {totalRecords} sản phẩm" globalFilter={globalFilter} header={header}>
                        {/* <Column selectionMode="multiple" exportable={false}></Column> */}
                        <Column field="processTypeId" header="Mã" sortable style={{ minWidth: '11rem' }}></Column>
                        <Column field="processTypeName" header="Tên Loại Tiến Trình" sortable style={{ minWidth: '11rem' }}></Column>
                        <Column field="description" header="Miêu Tả" sortable style={{ minWidth: '12rem' }}></Column>
                        {/* <Column field={createAt => moment(createAt.createAt).format('DD-MM-YYYY')} header="Day" sortable style={{ minWidth: '12rem' }}></Column> */}
                        {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                        <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem', marginRight: '100px' }}></Column>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} onClick={() => { setText('Thêm Mới Loại Tiến Trình') }} header={text} modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>

                    <div className="field">
                        <label htmlFor="name" className="font-bold" style={{ fontWeight: 'bold' }}>
                            Tên Loại Tiến Trình
                        </label>
                        <br />
                        <InputText id="processTypeName" value={product.processTypeName} onChange={(e) => onInputChange(e, 'processTypeName')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                        {submitted && !product.processTypeName && <small className="p-error">Tên Loại Tiến Trình Không Được Để Trống.</small>}
                    </div>
                    <div className="field mt-5">
                        <label htmlFor="description" className="font-bold" style={{ fontWeight: 'bold' }}>
                            Miêu Tả
                        </label>
                        <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        {submitted && !product.description && <small className="p-error">Miêu Tả Không Được Để Trống.</small>}
                    </div>




                </Dialog>

                <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Thông Báo" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {product && (
                            <span>
                                Bạn có chắc chắn muốn xóa loại tiến trình <b>{product.processTypeId}</b>?
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
