import Webiny from 'Webiny';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Category from './Components/Category';
import Folder from './Components/Folder';
import Browser from './Components/Browser';
const Ui = Webiny.Ui.Components;

class FileManager extends Webiny.Ui.ModalComponent {
    constructor(props) {
        super(props);

        this.state = {
            folders: {
                images: [
                    {
                        id: _.uniqueId('folder-'),
                        name: 'Selecto',
                        type: 'images',
                        files: [],
                        children: []
                    },
                    {
                        id: _.uniqueId('folder-'),
                        name: 'Webiny',
                        type: 'images',
                        files: [],
                        children: [
                            {
                                id: _.uniqueId('folder-'),
                                name: 'Huckletree',
                                type: 'images',
                                files: [],
                                children: []
                            }
                        ]
                    }
                ]
            }
        };

        this.bindMethods('renderFolder');
    }

    renderFolder(folder) {
        return (
            <Folder key={folder.id} name={folder.name}>
                {_.get(folder, 'children', []).map(this.renderFolder)}
            </Folder>
        );
    }
}

FileManager.defaultProps = {
    renderer() {
        return (
            <Ui.Modal.Dialog ref="dialog" wrapperClassName="modal--file-manager">
                <Header/>
                <Ui.Modal.Body>
                    <div className="tabs tabs--navigation-left">
                        <div className="tabs__body">
                            <Navigation>
                                <Category title="Images" icon="icon-picture-1">
                                    {_.get(this.state, 'folders.images', []).map(this.renderFolder)}
                                </Category>
                                <Category title="Documents" icon="icon-documents"/>
                                <Category title="Other" icon="icon-edit-1"/>
                            </Navigation>
                            {/* <Browser/> */}
                        </div>
                    </div>
                </Ui.Modal.Body>
            </Ui.Modal.Dialog>
        );
    }
};

export default FileManager;