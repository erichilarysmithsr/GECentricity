/// <reference path="$mdobject.objectbase.ts" />
namespace $mdObject {
    export interface IAddress {
        address1: string;
        address2: string;
        city: string;
        state: string;
        postCode: string;
        country: string;
    }

    export class Address extends ObjectBase implements IAddress {
        private _address1: string;
        private _address2: string;
        private _city: string;
        private _state: string;
        private _postCode: string;
        private _country: string;

        public get address1(): string {
            return this._address1 = this.getPatientProperty(this._address1, '{PATIENT.ADDRESS1}');
        }

        public get address2(): string {
            return this._address2 = this.getPatientProperty(this._address2, '{PATIENT.ADDRESS2}');
        }

        public get city(): string {
            return this._city = this.getPatientProperty(this._city, '{PATIENT.CITY}');
        }

        public get state(): string {
            return this._state = this.getPatientProperty(this._state, '{PATIENT.STATE}');
        }

        public get postCode(): string {
            return this._postCode = this.getPatientProperty(this._postCode, '{PATIENT.ZIP}');
        }

        public get country(): string {
            return this._country = this.getPatientProperty(this._country, '{PATIENT.COUNTRY}');
        }
    }
}