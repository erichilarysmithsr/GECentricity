/// <reference path="$mdobject.objectbase.ts" />
namespace $mdObject.Interfaces {
    export interface IPhone {
        home: string;
        business: string;
        mobile: string;
    }
}
namespace $mdObject {
    export class Phone extends ObjectBase implements Interfaces.IPhone {
        private _home: string;
        private _business: string;
        private _mobile: string;

        public get home(): string {
            return this._home = this.getPatientProperty(this._home, '{PATIENT.ALTPHONE}');
        }
        public get business(): string {
            return this._business = this.getPatientProperty(this._business, '{PATIENT.WORKPHONE}');
        }
        public get mobile(): string {
            return this._mobile = this.getPatientProperty(this._mobile, '{PATIENT.CELLPHONE}');
        }
    }
}