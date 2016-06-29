import Webiny from 'Webiny';
import View from './View';

class Module extends Webiny.Module {

    init() {
        this.registerMenus(
            new Webiny.Ui.Menu('FileManager', 'FileManager', 'icon-picture-1')
        );

        this.registerRoutes(
            new Webiny.Route('FileManager', '/file-manager', View, 'File Manager')
        );
    }
}

export default Module;