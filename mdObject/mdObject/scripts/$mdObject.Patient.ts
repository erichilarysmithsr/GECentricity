/// <reference path="$mdobject.objectbase.ts" />
/// <reference path="$mdobject.address.ts" />
/// <reference path="$mdobject.phone.ts" />
namespace $mdObject.Interfaces {
    export interface IPatient {
        /** Returns the patient’s ID number */
        patientId: string;
        /** Returns the internal PID number for patient record */
        pid: string;
        /** Returns the patient’s medical record number. */
        medicalRecordId: string;
        /** Returns the patient’s ID from an external system, such as a billing or lab system */
        externalId: string;
        /** Returns the preferred patient ID number for printed materials. */
        printId: string;
        /** Returns the patient’s Social Security number. */
        ssn: string;
        /** Returns the patient’s first name. */
        firstName: string;
        /** Returns the patient’s last name. */
        lastName: string;
        /** Returns the patient’s middle name. */
        middleName: string;
        /** Returns the patient’s full name formatted as follows: title first middle last, suffix */
        labelName: string;
        /** Name Prefix */
        namePrefix: string;
        /** Name Suffix */
        nameSuffix: string;
        /** Represent patient address object */
        address: IAddress;
        /** Patient’s sex. */
        sex: string;
        /** Patient’s race */
        race: string;
        /** Patient’s ethnicity */
        ethnicity: string;
        ///** Returns the patient’s birth date/time */
        //dateOfBirth: {}
        ///** Returns the patient’s date of death */
        //dateOfDeath: {}
        /** Returns the patient’s marital status (Single, Married, Divorced, Widowed, Separated, Other or Undetermined) */
        maritalStatus: string;
        /** Returns the patient’s preferred language */
        language: string;
        phone: IPhone;
        /** Returns the patient’s e-mail address */
        email: string;
        /** Returns the patient’s contact by information */
        contactBy: string;
        ///** Returns a list of the contacts for the current patient */
        //contacts: string;
        /** Returns the patient’s employment status. */
        employmentStatus: string;
        /** Patient’s current status in the clinic */
        clinicStatus: string;
        ///** Name of the primary care physician */
        //primaryCarePhysicianName: string;
        ///** referring provider */
        //referringProvider: {};

        ///** List all medications and refills  */
        //medications: {};
        ///** Lists all problems  */
        //problems: {};
        ///** Lists all observations.  */
        //observations: {};
        ///** List of all orders */
        //orders: {};
        ///** Protocols tell you when a patient is due for a particular action, based on factors that include sex, age, current problems, and current medications.  
        // ** The protocols contains array of observations required for this patient, as indicated by protocols set up in this clinic. */
        //protocols: Array<any>;
        ///** List of all directives */
        //directives: {};
        ///** Lists appointments */
        //appointments: {};
        ///** List of patient insurances  */
        //insurances: {};
        /** List of patient immunizations  */
        immunizations: IImmunization[];
        //carePlans: {};
    }
}
namespace $mdObject {
    class Patient extends ObjectBase implements Interfaces.IPatient {
        private _patientId: string;
        private _pid: string;
        private _medicalRecordId: string;
        private _externalId: string;
        private _printId: string;
        private _ssn: string;
        private _firstName: string;
        private _lastName: string;
        private _middleName: string;
        private _labelName: string;
        private _namePrefix: string;
        private _nameSuffix: string;
        private _sex: string;
        private _race: string;
        private _ethnicity: string;
        private _maritalStatus: string;
        private _language: string;
        private _email: string;
        private _contactBy: string;
        private _employmentStatus: string;
        private _clinicStatus: string;
        private _phone: Interfaces.IPhone;
        private _address: Interfaces.IAddress;
        private _immunizationsString: string;
        private _immunizations: Interfaces.IImmunization[];

        public get patientId(): string {
            return this._patientId = this.getPatientProperty(this._patientId, '{PATIENT.PATIENTID}');
        }

        public get pid(): string {
            return this._pid = this.getPatientProperty(this._pid, '{find("patient", "PID")}');
        }

        public get medicalRecordId(): string {
            return this._medicalRecordId = this.getPatientProperty(this._medicalRecordId, '{PATIENT.MEDRECNO}');
        }

        public get externalId(): string {
            return this._externalId = this.getPatientProperty(this._externalId, '{PATIENT.EXTERNALID}');
        }

        public get printId(): string {
            return this._printId = this.getPatientProperty(this._printId, '{PATIENT.PRINTID}');
        }

        public get ssn(): string {
            return this._ssn = this.getPatientProperty(this._ssn, '{PATIENT.SOCSECNO}');
        }

        public get firstName(): string {
            return this._firstName = this.getPatientProperty(this._firstName, '{PATIENT.FIRSTNAME}');
        }

        public get lastName(): string {
            return this._lastName = this.getPatientProperty(this._lastName, '{PATIENT.LASTNAME}');
        }

        public get middleName(): string {
            return this._middleName = this.getPatientProperty(this._middleName, '{PATIENT.MIDDLENAME}');
        }

        public get labelName(): string {
            return this._labelName = this.getPatientProperty(this._labelName, '{PATIENT.LABELNAME}');
        }

        public get namePrefix(): string {
            return this._namePrefix = this.getPatientProperty(this._namePrefix, '{PATIENT.TITLE}');
        }

        public get nameSuffix(): string {
            return this._nameSuffix = this.getPatientProperty(this._nameSuffix, '{PATIENT.ENTITLEMENTS}');
        }

        public get sex(): string {
            return this._sex = this.getPatientProperty(this._sex, '{PATIENT.SEX}');
        }

        public get race(): string {
            return this._race = this.getPatientProperty(this._race, '{PATIENT.RACE}');
        }

        public get ethnicity(): string {
            return this._ethnicity = this.getPatientProperty(this._ethnicity, '{PATIENT.ETHNICITY}');
        }

        public get maritalStatus(): string {
            return this._maritalStatus = this.getPatientProperty(this._maritalStatus, '{PATIENT.MARITALSTATUS}');
        }

        public get language(): string {
            return this._language = this.getPatientProperty(this._language, '{PATIENT.PREFLANG}');
        }

        public get email(): string {
            return this._email = this.getPatientProperty(this._email, '{PATIENT.EMAIL}');
        }

        public get contactBy(): string {
            return this._contactBy = this.getPatientProperty(this._contactBy, '{PATIENT.CONTACTBY}');
        }

        public get employmentStatus(): string {
            return this._employmentStatus = this.getPatientProperty(this._employmentStatus, '{PATIENT.EMPLSTATUS}');
        }

        public get clinicStatus(): string {
            return this._clinicStatus = this.getPatientProperty(this._clinicStatus, '{PATIENT.PSTATUS}');
        }

        public get phone(): Interfaces.IPhone {
            return this._phone = (this._phone !== undefined) ? this._phone : new Phone();
        }

        public get address(): Interfaces.IAddress {
            return this._address = (this._address !== undefined) ? this._address : new Address();
        }

        public get immunizations(): Interfaces.IImmunization[] {

            this._immunizationsString = this.getPatientProperty(this._immunizations, '{IMMUN_GETLIST()}');
            if (this._immunizations === undefined) {


                let data:string[] = this.InternalString(this._immunizationsString).toList();

                /*jslint plusplus: true */
                for (let index: number = 0; index < data.length; index++) {
                    this._immunizations[index] = new Immunization(data[index]);
                }

                //this._immunizations.tag = function () {
                //    return 'IMMUN_GETLIST';
                //} ();

                //this._immunizations.toMelString = function () {
                //    return this._immunizationsString;
                //};
            }
            return this._immunizations;
        }
    }

    export var patient: Interfaces.IPatient = new Patient();
}
