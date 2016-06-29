import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class Navigation extends Webiny.Ui.Component {

}

Navigation.defaultProps = {
    renderer() {
        return (
            <div className="tabs__navigation-wrapper">
                <ul className="tabs__navigation nav nav-tabs" role="tablist">
                    {this.props.children}
                </ul>

                <div className="tabs__details">
                    <div className="progress progress--free-space">
                        <span className="progress__title">Free space</span>

                        <div className="progress__bar">
                            <div className="progress__bar-inner" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                 aria-valuemax="100" style={{width: '70%'}}>
                            </div>
                        </div>
                        <span className="progress__percentage">7GB (of 10GB)</span>
                        <span className="progress__files">(2.176 files)</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navigation;