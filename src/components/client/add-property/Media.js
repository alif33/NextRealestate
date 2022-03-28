function Media() {
    return (
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 className="h4 mb-4"><i className="fi-image text-primary fs-4 mt-n1 me-2 pe-1" />Photos / video</h2>
            <div className="row">
                <div className="col-sm-12 mb-4">
                    <div className="alert alert-info mb-4" role="alert">
                        <div className="d-flex"><i className="fi-alert-circle me-2 me-sm-3" />
                            <p className="fs-sm mb-1">The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />The maximum video size is 10 MB. Formats: mp4, mov.</p>
                        </div>
                    </div>
                    <input className="file-uploader file-uploader-grid" type="file" multiple data-max-file-size="10MB" accept="image/png, image/jpeg, video/mp4, video/mov" data-label-idle="<div class=&quot;btn btn-primary mb-3&quot;><i class=&quot;fi-cloud-upload me-1&quot;></i>Upload photos / video</div><br>or drag them in" />
                </div>
            </div>
        </div>
    )
}
export default Media;