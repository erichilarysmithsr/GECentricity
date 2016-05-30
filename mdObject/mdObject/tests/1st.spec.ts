/// <reference path="../scripts/$mdobject.mel.ts" />
/// <reference path="typemoq.d.ts" />


class MelMock implements $mdObject.IMel {
    private _mel: any;
    private _noMelData: string = 'Data Access Error';

    isActiveXSupported() {
        return ("ActiveXObject" in window);
    }

    melFunc = (data: string) => { return data };
}

describe('$mdObject.patient.patientId tests', () => {
    validatePatientStringGetProperty('patientId', '{PATIENT.PATIENTID}');
});

describe('$mdObject.patient.pid tests', () => {
    validatePatientStringGetProperty('pid', '{find("patient", "PID")}');
});

describe('$mdObject.patient.medicalRecordId tests', () => {
    validatePatientStringGetProperty('medicalRecordId', '{PATIENT.MEDRECNO}');
});

describe('$mdObject.patient.externalId tests', () => {
    validatePatientStringGetProperty('externalId', '{PATIENT.EXTERNALID}');
});

describe('$mdObject.patient.printId tests', () => {
    validatePatientStringGetProperty('printId', '{PATIENT.PRINTID}');
});

describe('$mdObject.patient.firstName tests', () => {
    validatePatientStringGetProperty('firstName', '{PATIENT.FIRSTNAME}');
});

describe('$mdObject.patient.lastName tests', () => {
    validatePatientStringGetProperty('lastName', '{PATIENT.LASTNAME}');
});

describe('$mdObject.patient.middleName tests', () => {
    validatePatientStringGetProperty('middleName', '{PATIENT.MIDDLENAME}');
});

describe('$mdObject.patient.labelName tests', () => {
    validatePatientStringGetProperty('labelName', '{PATIENT.LABELNAME}');
});

describe('$mdObject.patient.namePrefix tests', () => {
    validatePatientStringGetProperty('namePrefix', '{PATIENT.TITLE}');
});

describe('$mdObject.patient.nameSuffix tests', () => {
    validatePatientStringGetProperty('nameSuffix', '{PATIENT.ENTITLEMENTS}');
});

describe('$mdObject.patient.sex tests', () => {
    validatePatientStringGetProperty('sex', '{PATIENT.SEX}');
});

describe('$mdObject.patient.race tests', () => {
    validatePatientStringGetProperty('race', '{PATIENT.RACE}');
});

describe('$mdObject.patient.ethnicity tests', () => {
    validatePatientStringGetProperty('ethnicity', '{PATIENT.ETHNICITY}');
});

describe('$mdObject.patient.maritalStatus tests', () => {
    validatePatientStringGetProperty('maritalStatus', '{PATIENT.MARITALSTATUS}');
});

describe('$mdObject.patient.language tests', () => {
    validatePatientStringGetProperty('language', '{PATIENT.PREFLANG}');
});

describe('$mdObject.patient.email tests', () => {
    validatePatientStringGetProperty('email', '{PATIENT.EMAIL}');
});

describe('$mdObject.patient.contactBy tests', () => {
    validatePatientStringGetProperty('contactBy', '{PATIENT.CONTACTBY}');
});

describe('$mdObject.patient.employmentStatus tests', () => {
    validatePatientStringGetProperty('employmentStatus', '{PATIENT.EMPLSTATUS}');
});

describe('$mdObject.patient.clinicStatus tests', () => {
    validatePatientStringGetProperty('clinicStatus', '{PATIENT.PSTATUS}');
});

describe('$mdObject.patient.phone tests', () => {

    // Create Mock object for MEL
    let mock: TypeMoq.Mock<$mdObject.IMel> = createMelMock();

    let elementHome = eval('$mdObject.patient.phone.home');
    it('home assigned', () => expect(elementHome).toEqual('{PATIENT.ALTPHONE}'));

    let elementBusiness = eval('$mdObject.patient.phone.business');
    it('business assigned', () => expect(elementBusiness).toEqual('{PATIENT.WORKPHONE}'));

    let elementMobile = eval('$mdObject.patient.phone.mobile');
    it('mobile assigned', () => expect(elementMobile).toEqual('{PATIENT.CELLPHONE}'));

    let elementPhone: $mdObject.IPhone = $mdObject.patient.phone;
    it('Phone home assigned', () => expect(elementPhone.home).toEqual('{PATIENT.ALTPHONE}'));

    eval('$mdObject.patient.phone.home');
    eval('$mdObject.patient.phone.business');
    eval('$mdObject.patient.phone.mobile');

    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.ALTPHONE}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.WORKPHONE}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.CELLPHONE}')), typemoq.Times.exactly(1));
});

function validatePatientStringGetProperty(propertyName: string, data: string) {
    // Create Mock object for MEL
    let mock: TypeMoq.Mock<$mdObject.IMel> = createMelMock();

    let elementFirstInstance = eval('$mdObject.patient.' + propertyName);

    it(propertyName + ' assigned', () => expect(elementFirstInstance).toEqual(data));

    let elementSecondInstance = eval('$mdObject.patient.' + propertyName);

    it('second call to ' + propertyName, () => expect(elementSecondInstance).toEqual(data));

    mock.verify(x => x.melFunc(typemoq.It.isValue(data)), typemoq.Times.exactly(1));
}
function createMelMock() {
    // Create Mock object for MEL
    let mock: TypeMoq.Mock<$mdObject.IMel> = typemoq.Mock.ofInstance(new $mdObject.Mel());

    // Setub Mel call to return the same value as it pass in
    mock.setup(x => x.melFunc(typemoq.It.isAnyString())).returns((data: string) => data).verifiable();

    // Assign mock to the Object MEL
    $mdObject.Mel.mel = mock.object;

    return mock;
}