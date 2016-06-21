namespace $mdObject.Interfaces {
    export interface IMel {
        isActiveXSupported: () => boolean;
        melFunc: (data: string) => any;
    }
}
namespace $mdObject {
    export class Mel implements Interfaces.IMel  {
        private static _mel: any;
        private _noMelData: string = 'Data Access Error';

        isActiveXSupported() {
            return ("ActiveXObject" in window);
        }

        melFunc = function (data:string) {
            return (this._mel === null) ? this._noMelData : this._mel.eval(data);
        };

        static get mel(): Interfaces.IMel {
            return this._mel = (this._mel !== undefined) ? this._mel : new Mel();
        }

        static set mel(mel: Interfaces.IMel) {
            this._mel = mel;
        }
    }
}