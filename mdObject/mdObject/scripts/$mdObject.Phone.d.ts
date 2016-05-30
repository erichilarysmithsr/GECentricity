/// <reference path="$mdobject.objectbase.d.ts" />
declare namespace $mdObject {
    interface IPhone {
        home: string;
        business: string;
        mobile: string;
    }
    class Phone extends ObjectBase implements IPhone {
        private _home;
        private _business;
        private _mobile;
        home: string;
        business: string;
        mobile: string;
    }
}
