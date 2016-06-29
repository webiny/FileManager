import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;
import FileManager from './FileManager';

class FileManagerView extends Webiny.Ui.Component {

    componentDidMount() {
        super.componentDidMount();
        this.ui('fileManager').show();
    }
}

FileManagerView.defaultProps = {
    renderer() {
        return (
            <Ui.View.List>
                <Ui.View.Header title="File Manager">
                    <Ui.Button type="primary" onClick={this.ui('fileManager:show')} label="Show File Manager"/>
                    <FileManager ui="fileManager"/>
                </Ui.View.Header>
            </Ui.View.List>
        );
    }
};

export default FileManagerView;