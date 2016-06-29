import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class Header extends Webiny.Ui.Component {

}

Header.defaultProps = {
    renderer() {
        return (
            <div className="modal-header">
                <div className="modal-header__top">
                    <h4 className="modal-title">file manager</h4>
                    <a href="#" className="btn btn-success btn-lg btn-upload">
                        <span className="icon left icon-plus-circled"></span>
                        <span>Upload a file</span>
                    </a>
                    <button type="button" className="close md-close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
            </div>
        );
    }
};

export default Header;