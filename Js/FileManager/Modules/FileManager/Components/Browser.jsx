import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class Browser extends Webiny.Ui.Component {

}

Browser.defaultProps = {
    renderer() {
        return (
            <div className="tabs__panes tabs__panes--with-border">

                <div className="tab-pane active" id="tab-1">
                    <div className="browser">

                        <div className="browser__header">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Library</a></li>
                                <li className="active">Data</li>
                            </ol>

                            <div className="browser__header-tools">
                                <div className="browser__header-actions">
                                    <a className="browser__header-add-folder" href="#"><span
                                        className="icon icon-folder-add"></span></a>
                                    <a className="browser__header-search" href="#"><span
                                        className="icon icon-search"></span></a>
                                    <a className="browser__header-view-list active" href="#" data-viewtype="list"><span
                                        className="icon icon-th-list"></span></a>
                                    <a className="browser__header-view-grid" href="#" data-viewtype="grid"><span
                                        className="icon icon-th"></span></a>
                                </div>

                                <div className="browser__header-options dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button"
                                            data-toggle="dropdown">
                                        Folder options
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Move</a></li>
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Rename</a></li>
                                        <li role="presentation" className="divider"></li>
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="browser__content browser__content--list scrollable" id="lists_container">

                            <div className="browser__sorter" id="list_1">
                                <div className="browser__sorter-file">
                                    <a className="browser__sorter-checkbox">
                                        <div className="checkbox-custom mb5">
                                            <input id="checkboxDefault1" type="checkbox"/>
                                            <label htmlFor="checkboxDefault1">Yes</label>
                                        </div>
                                    </a>
                                    <a className="browser__sorter-sortable browser__sorter-name">filename</a>
                                </div>
                                <a className="browser__sorter-sortable browser__sorter-date">Uploaded</a>
                                <a className="browser__sorter-sortable browser__sorter-size">filesize</a>
                                <a className="browser__sorter-options"><span className="icon left icon-cog"></span></a>
                            </div>

                            <ul className="browser__box" id="list_1">

                                <li className="browser__box-item browser__box-item--folder">
                                    <div className="browser__box-item-checkbox">
                                        <div className="checkbox-custom mb5">
                                            <input id="fileCheckbox1" type="checkbox"/>
                                            <label htmlFor="fileCheckbox1">Yes</label>
                                        </div>
                                    </div>
                                    <div className="browser__box-item-image"></div>
                                    <div className="browser__box-item-name"><span className="icon icon-folder"></span>Front
                                        cover
                                    </div>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox2" type="checkbox"/>
                                                <label htmlFor="fileCheckbox2">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>homepage.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox" checked=""/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                            </ul>
                        </div>

                        <div className="browser__details">
                            <div className="file-details">
                                <form action="file_manager_submit" method="get" acceptCharset="utf-8">
                                    <div className="file-details__filename">
                                        <div className="form-group">
                                            <label className="control-label">file name</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="file-stage.jpg" className="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <a className="file-details__preview" href="#">
                                        <span className="icon icon-search"></span>
                                    </a>

                                    <div className="file-details__actions">
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-rename"></span></a>
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-trash"></span></a>
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-resize"></span></a>

                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle" type="button"
                                                    data-toggle="dropdown">
                                                300*250
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">300*250</a>
                                                </li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">600*500</a>
                                                </li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">1200*1000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="file-details__info">
                                        <div className="form-group">
                                            <label className="control-label">file size</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="2.0 MB" className="form-control" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Date uploaded</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="21. Jun. 2016" className="form-control" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Location</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="images/kudos/dawson/" className="form-control"
                                                   readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Url</label>
                                            <span className="info-txt"></span>

                                            <div className="input-group">
                                                <input type="text" value="webiny.com/nesto/nest..." className="form-control"
                                                       readOnly/>
                                                <a href="#" className="btn btn-default">copy</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="file-details__meta">
                                        <div className="form-group">
                                            <label className="control-label">Image Caption</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Alt Text</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Author</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane" id="tab-2">
                    <div className="browser">

                        <div className="browser__header">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Library</a></li>
                                <li className="active">Data</li>
                            </ol>

                            <div className="browser__header-tools">
                                <div className="browser__header-actions">
                                    <a className="browser__header-add-folder" href="#"><span
                                        className="icon icon-folder-add"></span></a>
                                    <a className="browser__header-search" href="#"><span
                                        className="icon icon-search"></span></a>
                                    <a className="browser__header-view-list" href="#" data-viewtype="list"><span
                                        className="icon icon-th-list"></span></a>
                                    <a className="browser__header-view-grid" href="#" data-viewtype="grid"><span
                                        className="icon icon-th"></span></a>
                                </div>

                                <div className="browser__header-options dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button"
                                            data-toggle="dropdown">
                                        Folder options
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Move</a></li>
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Rename</a></li>
                                        <li role="presentation" className="divider"></li>
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="browser__content browser__content--list scrollable" id="lists_container">

                            <div className="browser__sorter" id="list_2">
                                <div className="browser__sorter-file">
                                    <a className="browser__sorter-checkbox">
                                        <div className="checkbox-custom mb5">
                                            <input id="checkboxDefault1" type="checkbox"/>
                                            <label htmlFor="checkboxDefault1">Yes</label>
                                        </div>
                                    </a>
                                    <a className="browser__sorter-sortable browser__sorter-name">filename</a>
                                </div>
                                <a className="browser__sorter-sortable browser__sorter-date">Uploaded</a>
                                <a className="browser__sorter-sortable browser__sorter-size">filesize</a>
                                <a className="browser__sorter-options"><span className="icon left icon-cog"></span></a>
                            </div>

                            <ul className="browser__box" id="list_1">

                                <li className="browser__box-item browser__box-item--folder">
                                    <div className="browser__box-item-checkbox">
                                        <div className="checkbox-custom mb5">
                                            <input id="fileCheckbox1" type="checkbox"/>
                                            <label htmlFor="fileCheckbox1">Yes</label>
                                        </div>
                                    </div>
                                    <div className="browser__box-item-image"></div>
                                    <div className="browser__box-item-name"><span className="icon icon-folder"></span>Front
                                        cover
                                    </div>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox2" type="checkbox"/>
                                                <label htmlFor="fileCheckbox2">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>homepage.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                            </ul>
                        </div>

                        <div className="browser__details">
                            <div className="file-details">
                                <form action="file_manager_submit" method="get" acceptCharset="utf-8">
                                    <div className="file-details__filename">
                                        <div className="form-group">
                                            <label className="control-label">file name</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="Stage_2.jpg" className="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <a className="file-details__preview" href="#">
                                        <span className="icon icon-search"></span>
                                    </a>

                                    <div className="file-details__actions">
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-rename"></span></a>
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-trash"></span></a>
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-resize"></span></a>

                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle" type="button"
                                                    data-toggle="dropdown">
                                                300*250
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">300*250</a>
                                                </li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">600*500</a>
                                                </li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">1200*1000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="file-details__info">
                                        <div className="form-group">
                                            <label className="control-label">file size</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="2.0 MB" className="form-control" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Date uploaded</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="21. Jun. 2016" className="form-control" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Location</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="images/kudos/dawson/" className="form-control"
                                                   readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Url</label>
                                            <span className="info-txt"></span>

                                            <div className="input-group">
                                                <input type="text" value="webiny.com/nesto/nest..." className="form-control"
                                                       readOnly/>
                                                <a href="#" className="btn btn-default">copy</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="file-details__meta">
                                        <div className="form-group">
                                            <label className="control-label">Image Caption</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Alt Text</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Author</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="tab-3">
                    <div className="browser">

                        <div className="browser__header">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Library</a></li>
                                <li className="active">Data</li>
                            </ol>

                            <div className="browser__header-tools">
                                <div className="browser__header-actions">
                                    <a className="browser__header-add-folder" href="#"><span
                                        className="icon icon-folder-add"></span></a>
                                    <a className="browser__header-search" href="#"><span
                                        className="icon icon-search"></span></a>
                                    <a className="browser__header-view-list" href="#" data-viewtype="list"><span
                                        className="icon icon-th-list"></span></a>
                                    <a className="browser__header-view-grid" href="#" data-viewtype="grid"><span
                                        className="icon icon-th"></span></a>
                                </div>

                                <div className="browser__header-options dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button"
                                            data-toggle="dropdown">
                                        Folder options
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Move</a></li>
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Rename</a></li>
                                        <li role="presentation" className="divider"></li>
                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="browser__content browser__content--list scrollable" id="lists_container">

                            <div className="browser__sorter" id="list_2">
                                <div className="browser__sorter-file">
                                    <a className="browser__sorter-checkbox">
                                        <div className="checkbox-custom mb5">
                                            <input id="checkboxDefault1" type="checkbox"/>
                                            <label htmlFor="checkboxDefault1">Yes</label>
                                        </div>
                                    </a>
                                    <a className="browser__sorter-sortable browser__sorter-name">filename</a>
                                </div>
                                <a className="browser__sorter-sortable browser__sorter-date">Uploaded</a>
                                <a className="browser__sorter-sortable browser__sorter-size">filesize</a>
                                <a className="browser__sorter-options"><span className="icon left icon-cog"></span></a>
                            </div>

                            <ul className="browser__box" id="list_1">

                                <li className="browser__box-item browser__box-item--folder">
                                    <div className="browser__box-item-checkbox">
                                        <div className="checkbox-custom mb5">
                                            <input id="fileCheckbox1" type="checkbox"/>
                                            <label htmlFor="fileCheckbox1">Yes</label>
                                        </div>
                                    </div>
                                    <div className="browser__box-item-image"></div>
                                    <div className="browser__box-item-name"><span className="icon icon-folder"></span>Front
                                        cover
                                    </div>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox2" type="checkbox"/>
                                                <label htmlFor="fileCheckbox2">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>homepage.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item browser__box-item--selected">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input checked="" id="fileCheckbox3" type="checkbox"/>
                                                <label htmlFor="fileCheckbox3">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                                <li className="browser__box-item">
                                    <div className="browser__box-item-file">
                                        <div className="browser__box-item-checkbox">
                                            <div className="checkbox-custom mb5">
                                                <input id="fileCheckbox4" type="checkbox"/>
                                                <label htmlFor="fileCheckbox4">Yes</label>
                                            </div>
                                        </div>
                                        <div className="browser__box-item-image"></div>
                                        <div className="browser__box-item-name"><span className="icon icon-file-jpg"></span>file-sd
                                            fds stage_1.jpg
                                        </div>
                                    </div>
                                    <div className="browser__box-item-date">23.04.2016.</div>
                                    <div className="browser__box-item-size">0.3mb</div>
                                    <a href="#" className="browser__box-item-options"><span
                                        className="icon left icon-cog"></span></a>
                                </li>

                            </ul>
                        </div>

                        <div className="browser__details">
                            <div className="file-details">
                                <form action="file_manager_submit" method="get" acceptCharset="utf-8">
                                    <div className="file-details__filename">
                                        <div className="form-group">
                                            <label className="control-label">file name</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="homepage.jpg" className="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <a className="file-details__preview" href="#">
                                        <span className="icon icon-search"></span>
                                    </a>

                                    <div className="file-details__actions">
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-rename"></span></a>
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-trash"></span></a>
                                        <a href="#" className="btn btn-success"><span
                                            className="icon icon-resize"></span></a>

                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle" type="button"
                                                    data-toggle="dropdown">
                                                300*250
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">300*250</a>
                                                </li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">600*500</a>
                                                </li>
                                                <li role="presentation"><a role="menuitem" tabIndex="-1"
                                                                           href="#">1200*1000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="file-details__info">
                                        <div className="form-group">
                                            <label className="control-label">file size</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="2.0 MB" className="form-control" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Date uploaded</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="21. Jun. 2016" className="form-control" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Location</label>
                                            <span className="info-txt"></span>
                                            <input type="text" value="images/kudos/dawson/" className="form-control"
                                                   readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Url</label>
                                            <span className="info-txt"></span>

                                            <div className="input-group">
                                                <input type="text" value="webiny.com/nesto/nest..." className="form-control"
                                                       readOnly/>
                                                <a href="#" className="btn btn-default">copy</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="file-details__meta">
                                        <div className="form-group">
                                            <label className="control-label">Image Caption</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Alt Text</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Author</label>
                                            <span className="info-txt"></span>
                                            <input type="text" placeholder="" className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default Browser;