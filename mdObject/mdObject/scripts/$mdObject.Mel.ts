namespace $mdObject {
    export interface IMel {
        isActiveXSupported: () => boolean;
        melFunc: (data: string) => any;
    }

    export class Mel implements IMel  {
        private static _mel: any;
        private _noMelData: string = 'Data Access Error';

        isActiveXSupported() {
            return ("ActiveXObject" in window);
        }

        melFunc = function (data:string) {
            return (this._mel === null) ? this._noMelData : this._mel.eval(data);
        };

        static get mel(): IMel {
            return this._mel = (this._mel !== undefined) ? this._mel : new Mel();
        }

        static set mel(mel: IMel) {
            this._mel = mel;
        }
    }
}