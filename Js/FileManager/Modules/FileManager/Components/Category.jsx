import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class Category extends Webiny.Ui.Component {

}

Category.defaultProps = {
    title: '',
    icon: null,
    renderer() {
        return (
            <li role="presentation" className={this.classSet('tabs__navigation-item')}>
                <a href="#tab-1" aria-controls="tab-1" role="tab" data-toggle="tab">
                    <span className={this.classSet('icon left', this.props.icon)}></span>
                    <span className="txt">{this.props.title}</span>
                    <button className="tabs__navigation-item-options">
                        <span className="icon left icon-cog"></span>
                    </button>
                </a>

                <ul className="ftree">
                    {this.props.children}
                </ul>
            </li>
        );
    }
};

export default Category;