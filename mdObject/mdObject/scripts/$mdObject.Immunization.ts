/// <reference path="$mdobject.objectbase.ts" />
namespace $mdObject {
    export interface IImmunization {
        immunizationId: string;
        immunizationGroupId: string;
        vaccineGroupName: string;
        vaccineName: string;
        medicalDisplayName: string;
        series: string;
        wasGiven: string;
        reasonNotGiven: string;
        historical: string;
        historicalSource: string;
        vfcElegibility: string;
        ddid: string;
        dnid: string;
        gpi: string;
        kdc: string;
        ndc: string;
        cvxCode: string;
        doseAmount: string;
        dosageUnitOfMeasure: string;
        route: string;
        routeCode: string;
        site: string;
        siteCode: string;
        manufacturer: string;
        manufacturerCode: string;
        lotNumber: string;
        expirationDate: string;
        visPublishedDate: string;
        administeredByName: string;
        administeredDate: string;
        administeredDateType: string;
        administeredComments: string;
        advReactionDateTime: string;
        advReactionDateTimeType: string;
        advReactionComments: string;
        advReactionCmtByName: string;
        signed: string;
        signedByName: string;
        signedDate: string;
        reasonRemoved: string;
        stopDate: string;
        reasonNotGivenMedical: string;
        reasonNotGivenMedicalDetail: string;
        save: () => void;
    }
    export class Immunization extends ObjectBase implements IImmunization {
        private isNew: boolean;
        private _value: string;

        constructor(value: string) {
            super();
            this._value = value;

            let data = value === undefined ? [] : value.split('^');
            this.isNew = value === undefined ? true : false;

            this.immunizationId = (data.length > 0) ? data[0] : '';
            this.immunizationGroupId = (data.length > 1) ? data[1] : '';
            this.vaccineGroupName = (data.length > 2) ? data[2] : '';
            this.vaccineName = (data.length > 3) ? data[3] : '';
            this.medicalDisplayName = (data.length > 4) ? data[4] : '';
            this.series = (data.length > 5) ? data[5] : '';
            this.wasGiven = (data.length > 6) ? data[6] : '';
            this.reasonNotGiven = (data.length > 7) ? data[7] : '';
            this.historical = (data.length > 8) ? data[8] : '';
            this.historicalSource = (data.length > 9) ? data[9] : '';
            this.vfcElegibility = (data.length > 10) ? data[10] : '';
            this.ddid = (data.length > 11) ? data[11] : '';
            this.dnid = (data.length > 12) ? data[12] : '';
            this.gpi = (data.length > 13) ? data[13] : '';
            this.kdc = (data.length > 14) ? data[14] : '';
            this.ndc = (data.length > 15) ? data[15] : '';
            this.cvxCode = (data.length > 16) ? data[16] : '';
            this.doseAmount = (data.length > 17) ? data[17] : '';
            this.dosageUnitOfMeasure = (data.length > 18) ? data[18] : '';
            this.route = (data.length > 19) ? data[19] : '';
            this.routeCode = (data.length > 20) ? data[20] : '';
            this.site = (data.length > 21) ? data[21] : '';
            this.siteCode = (data.length > 22) ? data[22] : '';
            this.manufacturer = (data.length > 23) ? data[23] : '';
            this.manufacturerCode = (data.length > 24) ? data[24] : '';
            this.lotNumber = (data.length > 25) ? data[25] : '';
            this.expirationDate = (data.length > 26) ? data[26] : '';
            this.visPublishedDate = (data.length > 27) ? data[27] : '';
            this.administeredByName = (data.length > 28) ? data[28] : '';
            this.administeredDate = (data.length > 29) ? data[29] : '';
            this.administeredDateType = (data.length > 30) ? data[30] : '';
            this.administeredComments = (data.length > 31) ? data[31] : '';
            this.advReactionDateTime = (data.length > 32) ? data[32] : '';
            this.advReactionDateTimeType = (data.length > 33) ? data[33] : '';
            this.advReactionComments = (data.length > 34) ? data[34] : '';
            this.advReactionCmtByName = (data.length > 35) ? data[35] : '';
            this.signed = (data.length > 36) ? data[36] : '';
            this.signedByName = (data.length > 37) ? data[37] : '';
            this.signedDate = (data.length > 38) ? data[38] : '';
            this.reasonRemoved = (data.length > 39) ? data[39] : '';
            this.stopDate = (data.length > 40) ? data[40] : '';
            this.reasonNotGivenMedical = (data.length > 41) ? data[41] : '';
            this.reasonNotGivenMedicalDetail = (data.length > 42) ? data[42] : '';
        }

        public immunizationId: string;
        public immunizationGroupId: string;
        public vaccineGroupName: string;
        public vaccineName: string;
        public medicalDisplayName: string;
        public series: string;
        public wasGiven: string;
        public reasonNotGiven: string;
        public historical: string;
        public historicalSource: string;
        public vfcElegibility: string;
        public ddid: string;
        public dnid: string;
        public gpi: string;
        public kdc: string;
        public ndc: string;
        public cvxCode: string;
        public doseAmount: string;
        public dosageUnitOfMeasure: string;
        public route: string;
        public routeCode: string;
        public site: string;
        public siteCode: string;
        public manufacturer: string;
        public manufacturerCode: string;
        public lotNumber: string;
        public expirationDate: string;
        public visPublishedDate: string;
        public administeredByName: string;
        public administeredDate: string;
        public administeredDateType: string;
        public administeredComments: string;
        public advReactionDateTime: string;
        public advReactionDateTimeType: string;
        public advReactionComments: string;
        public advReactionCmtByName: string;
        public signed: string;
        public signedByName: string;
        public signedDate: string;
        public reasonRemoved: string;
        public stopDate: string;
        public reasonNotGivenMedical: string;
        public reasonNotGivenMedicalDetail: string;

        public save = function() {
            if (this.isNew) {
                var isError = this.validateAdd(),
                    response;
                if (isError === '') {
                    response = this.getPatientProperty(response, '{IMMUN_ADD("' + this.toStringAdd() + '")}'); //_mel.melFunc('{IMMUN_ADD("' + this.toStringAdd() + '")}');
                    if (response < 0) {
                        alert(response);
                    }
                } else {
                    alert(isError);
                }
            } else {
                // update
            }
        };

        public toMelString = function() {
            return this._value;
        }

        private validateAdd = function () {
            var errorMessage = ' is required.';
            // check required parameters
            if (this.vaccineGroupName === '') {
                return 'vaccineGroupName' + errorMessage;
            }
            if (this.wasGiven === '') {
                return 'wasGiven' + errorMessage;
            }
            if (this.historical === '') {
                return 'historical' + errorMessage;
            }
            if (this.vfcElegibility === '') {
                return 'vfcElegibility' + errorMessage;
            }
            if (this.administeredDate === '') {
                return 'administeredDate' + errorMessage;
            }
            if (this.doseAmount.match(/[^0-9.]/g)) {
                return 'doseAmount should be numeric.';
            }
            return '';
        };

        private toStringAdd = function () {
            return this.vaccineGroupName + '^' + this.vaccineName + '^' + this.medicalDisplayName + '^' + this.series + '^' + this.wasGiven +
                '^' + this.reasonNotGiven + '^' + this.historical + '^' + this.historicalSource + '^' + this.vfcElegibility + '^' + this.ddid +
                '^' + this.dnid + '^' + this.gpi + '^' + this.kdc + '^' + this.ndc + '^' + this.cvxCode + '^' + this.doseAmount + '^' + this.dosageUnitOfMeasure +
                '^' + this.route + '^' + this.routeCode + '^' + this.site + '^' + this.siteCode + '^' + this.manufacturer + '^' + this.manufacturerCode +
                '^' + this.lotNumber + '^' + this.expirationDate + '^' + this.visPublishedDate + '^' + this.administeredByName + '^' + this.administeredDate +
                '^' + this.administeredDateType + '^' + this.administeredComments + '^' + this.advReactionDateTime + '^' + this.advReactionDateTimeType +
                '^' + this.advReactionComments + '^' + this.advReactionCmtByName + '^' + this.signed + '^' + this.signedByName + '^' + this.signedDate +
                '^' + this.reasonRemoved + '^' + this.stopDate + '^' + this.reasonNotGivenMedical + '^' + this.reasonNotGivenMedicalDetail;
        };
    }
}