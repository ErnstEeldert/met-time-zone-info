import { LightningElement, api } from 'lwc';
import { getDeviceTimeZone, getServerTimeZone } from 'data/sfsService';

export default class App extends LightningElement {
    deviceTimeZone = getDeviceTimeZone();
    serverTimeZone = null;

    connectedCallback() {
        getServerTimeZone().then((result) => {
            this.serverTimeZone = result;
        });
    }

    @api
    get updateButtonState() {
        return this.deviceTimeZone === this.serverTimeZone;
    }

    dismiss() {
        fsl.ui.dismiss();
    }

    async update() {
        let user = {
            apiName: 'User',
            fields: {
                TimeZoneSidKey: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        };
        let res = await fsl.record
            .updateRecord(fsl.context.user.id, user)
            .catch((err) => {
                return;
            });
        fsl.ui.dismiss();
    }
}
