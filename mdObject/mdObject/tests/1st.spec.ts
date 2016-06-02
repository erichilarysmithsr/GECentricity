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
    let mock: TypeMoq.Mock<$mdObject.IMel> = setupSimpleMelMock();

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

describe('$mdObject.patient.address tests', () => {

    // Create Mock object for MEL
    let mock: TypeMoq.Mock<$mdObject.IMel> = setupSimpleMelMock();

    let elementAddress1 = eval('$mdObject.patient.address.address1');
    it('Address1 assigned', () => expect(elementAddress1).toEqual('{PATIENT.ADDRESS1}'));

    let elementAddress2 = eval('$mdObject.patient.address.address2');
    it('Address2 assigned', () => expect(elementAddress2).toEqual('{PATIENT.ADDRESS2}'));

    let elementCity = eval('$mdObject.patient.address.city');
    it('City assigned', () => expect(elementCity).toEqual('{PATIENT.CITY}'));

    let elementState = eval('$mdObject.patient.address.state');
    it('State assigned', () => expect(elementState).toEqual('{PATIENT.STATE}'));

    let elementPostCode = eval('$mdObject.patient.address.postCode');
    it('postCode assigned', () => expect(elementPostCode).toEqual('{PATIENT.ZIP}'));

    let elementcountry = eval('$mdObject.patient.address.country');
    it('country assigned', () => expect(elementcountry).toEqual('{PATIENT.COUNTRY}'));

    elementAddress1 = eval('$mdObject.patient.address.address1');
    it('second call to Address1 assigned', () => expect(elementAddress1).toEqual('{PATIENT.ADDRESS1}'));

    elementAddress2 = eval('$mdObject.patient.address.address2');
    it('second call to Address2 assigned', () => expect(elementAddress2).toEqual('{PATIENT.ADDRESS2}'));

    elementCity = eval('$mdObject.patient.address.city');
    it('second call to City assigned', () => expect(elementCity).toEqual('{PATIENT.CITY}'));

    elementState = eval('$mdObject.patient.address.state');
    it('second call to State assigned', () => expect(elementState).toEqual('{PATIENT.STATE}'));

    elementPostCode = eval('$mdObject.patient.address.postCode');
    it('second call to postCode assigned', () => expect(elementPostCode).toEqual('{PATIENT.ZIP}'));

    elementcountry = eval('$mdObject.patient.address.country');
    it('second call to country assigned', () => expect(elementcountry).toEqual('{PATIENT.COUNTRY}'));

    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.ADDRESS1}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.ADDRESS2}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.CITY}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.STATE}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.ZIP}')), typemoq.Times.exactly(1));
    mock.verify(x => x.melFunc(typemoq.It.isValue('{PATIENT.COUNTRY}')), typemoq.Times.exactly(1));
});

function validatePatientStringGetProperty(propertyName: string, data: string) {
    // Create Mock object for MEL
    let mock: TypeMoq.Mock<$mdObject.IMel> = setupSimpleMelMock();

    let elementFirstInstance = eval('$mdObject.patient.' + propertyName);

    it(propertyName + ' assigned', () => expect(elementFirstInstance).toEqual(data));

    let elementSecondInstance = eval('$mdObject.patient.' + propertyName);

    it('second call to ' + propertyName, () => expect(elementSecondInstance).toEqual(data));

    mock.verify(x => x.melFunc(typemoq.It.isValue(data)), typemoq.Times.exactly(1));
}
function createMelMock() {
    // Create Mock object for MEL
    let mock: TypeMoq.Mock<$mdObject.IMel> = typemoq.Mock.ofInstance(new $mdObject.Mel());

    // Assign mock to the Object MEL
    $mdObject.Mel.mel = mock.object;

    return mock;
}

function setupSimpleMelMock() {
    let mock: TypeMoq.Mock<$mdObject.IMel> = createMelMock();

    // Setub Mel call to return the same value as it pass in
    mock.setup(x => x.melFunc(typemoq.It.isAnyString())).returns((data: string) => data).verifiable();

    return mock;
}

describe('$mdObject.Immunization tests', () => {

    let mock: TypeMoq.Mock<$mdObject.IMel> = createMelMock();
    let source: string = "1731392339121890^1731392339122220^Hepatitis B^Engerix-B Injection Suspension 10 MCG/0.5ML^Engerix-B Injection Suspension^1^Y^^N^^V01^66290^^17100010201827^^58160085901^08^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^U1234^12/31/2015^2/2/2012^hwinston^9/2/2009 6:18 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392396121900^1731392396121900^Hepatitis B^Engerix-B Injection Suspension 10 MCG/0.5ML^Engerix-B Injection Suspension 10 MCG/0.5ML^2^Y^^N^^V01^66290^^17100010201827^^58160085901^08^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^U1234^12/31/2015^2/2/2012^hwinston^10/1/2009 6:19 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392437121910^1731392437121910^Hepatitis B^Engerix-B Injection Suspension 10 MCG/0.5ML^Engerix-B Injection Suspension 10 MCG/0.5ML^3^Y^^N^^V01^66290^^17100010201827^^58160085901^08^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^U1234^12/31/2015^2/2/2012^hwinston^3/4/2010 6:20 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392590121920^1731392590121920^DTaP^Infanrix Intramuscular Suspension 25-58-10^Infanrix Intramuscular Suspension 25-58-10^1^Y^^N^^V01^48223^^18990003201840^^58160081051^20^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^Z4321^12/31/2015^5/17/2007^hwinston^11/3/2009 6:23 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392628121930^1731392628121930^DTaP^Infanrix Intramuscular Suspension 25-58-10^Infanrix Intramuscular Suspension 25-58-10^2^Y^^N^^V01^48223^^18990003201840^^58160081051^20^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^Z4321^12/31/2015^5/17/2007^hwinston^1/4/2010 6:23 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392666121940^1731392666121940^DTaP^Infanrix Intramuscular Suspension 25-58-10^Infanrix Intramuscular Suspension 25-58-10^3^Y^^N^^V01^48223^^18990003201840^^58160081051^20^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^Z4321^12/31/2015^5/17/2007^hwinston^3/4/2010 6:24 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392701121950^1731392701121950^Polio^Ipol Injection Injectable^Ipol Injection Injectable^1^Y^^N^^V01^164891^^17100050002250^^54569481200^10^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^54321^12/31/2014^11/8/2011^hwinston^11/3/2009 6:24 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392735121960^1731392735121960^Polio^Ipol Injection Injectable^Ipol Injection Injectable^2^Y^^N^^V01^164891^^17100050002250^^54569481200^10^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^54321^12/31/2014^11/8/2011^hwinston^1/4/2010 6:25 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392761121970^1731392761121970^Polio^Ipol Injection Injectable^Ipol Injection Injectable^3^Y^^N^^V01^164891^^17100050002250^^54569481200^10^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^54321^12/31/2014^11/8/2011^hwinston^3/4/2010 6:25 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392853122650^1731392853122650^Hepatitis A^Havrix Intramuscular Suspension 720 EL U/0.5ML^Havrix Intramuscular Suspension 720 EL U/0.5ML^1^Y^^N^^V01^98952^^17100008001830^^58160082501^83^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^321^9/30/2014^10/25/2011^hwinston^9/14/2010 6:27 AM^D^^^^^^Y^hwinston^11/12/2014 6:29 AM^^^^|1731392884122660^1731392884122660^MMR^M-M-R II Subcutaneous Injectable^M-M-R II Subcutaneous Injectable^1^Y^^N^^V01^12564^^17109903102200^^54569158800^03^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^8765^12/31/2015^4/20/2012^hwinston^9/14/2010 6:27 AM^D^^^^^^Y^hwinston^11/12/2014 6:29 AM^^^^|1731392926122670^1731392926122670^Varicella (Chicken Pox)^Varivax Subcutaneous Injectable 1350 PFU/0.5ML^Varivax Subcutaneous Injectable 1350 PFU/0.5ML^1^Y^^N^^V01^39625^^17100087102210^^54569405500^21^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^6543^12/31/2015^3/13/2008^hwinston^9/14/2010 6:28 AM^D^^^^^^Y^hwinston^11/12/2014 6:29 AM^^^^"

    // Setub Mel call to return the same value as it pass in
    mock.setup(x => x.melFunc(typemoq.It.isAnyString())).returns((data: string) => this.source).verifiable();

    let im = new $mdObject.Immunization(source);

    it('immunizationId assigned', () => expect(im.immunizationId).toEqual('1731392339121890'));
    it('immunizationGroupId assigned', () => expect(im.immunizationGroupId).toEqual('1731392339122220'));
    it('vaccineGroupName assigned', () => expect(im.vaccineGroupName).toEqual('Hepatitis B'));
    it('vaccineName assigned', () => expect(im.vaccineName).toEqual('Engerix-B Injection Suspension 10 MCG/0.5ML'));
    it('medicalDisplayName assigned', () => expect(im.medicalDisplayName).toEqual('Engerix-B Injection Suspension'));
    it('series assigned', () => expect(im.series).toEqual('1'));
    it('wasGiven assigned', () => expect(im.wasGiven).toEqual('Y'));
    

});
