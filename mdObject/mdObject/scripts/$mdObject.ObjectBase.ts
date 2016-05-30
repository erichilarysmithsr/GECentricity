namespace $mdObject {
    export abstract class ObjectBase {
        private _mel: IMel;

        protected getPatientProperty = function (local: any, method: string): string {
            return (local !== undefined) ? local : Mel.mel.melFunc(method);
        }
    }
}