import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class Folder extends Webiny.Ui.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            active: false
        };

        this.bindMethods('onClick');
    }

    onClick() {
        if (this.props.children && this.props.children.length > 0) {
            this.setState({expanded: !this.state.expanded});
        } else {
            this.setState({active: !this.state.active});
        }
    }
}

Folder.defaultProps = {
    renderer() {
        let children = null;
        if (this.props.children && this.props.children.length > 0) {
            children = (
                <ul className="ftree__dropdown">
                    {this.props.children}
                </ul>
            );
        }

        const css = this.classSet('ftree__folder', {
            'ftree__folder--has-subfolder': children,
            'ftree__folder--expanded': this.state.expanded,
            'ftree__folder--active': this.state.active
        });

        return (
            <li className={css}>
                <a href="javascript:void(0)" onClick={this.onClick}>
                    <span className="icon left icon-folder"></span>
                    {this.props.name}
                    <span className="icon icon-cog"></span>
                    <span className="icon icon-trash"></span>
                </a>
                {children}
            </li>
        );
    }
};

export default Folder;