
const BootStrapLayout = () => {
    return (<div>
        <h1>BootStrap Layout</h1>
        <div className="container bg-dark">
            <div className="row">
                <div className="col-md-6 bg-primary p-3">
                    <h1 className="m-3">Column 1</h1>
                </div>
                <div className="col-md-6 bg-secondary">
                    <h1 className="m-3">Column 2</h1>
                </div>
                <div className="col-md-12 bg-dark-subtle">
                    <h1 className="m-3">Column 3</h1>
                </div>
                <div className="col-md-3 bg-dark">
                    <p>Hello thie is for 4 columns</p>
                </div>
                <div className="col-md-6 bg-warning">
                    <p>Hello thie is for 4 columns</p>
                </div>
                <div className="col-md-3 bg-info">
                    <p>Hello thie is for 4 columns</p>
                </div>
            </div>
        </div>
    </div>)
}
export default BootStrapLayout;