namespace $mdObject.Interfaces {
    export interface IInternalString extends String {
        toList(seporator?: string): string[];
        startsWith(str: string): boolean;
        endsWith(str: string): boolean;
        tag: string;
        toDate(): Date;
    }
}
namespace $mdObject {
    export abstract class ObjectBase {
        private _mel: Interfaces.IMel;

        protected InternalString(a, b?): Interfaces.IInternalString {
            return new StringInternal(a, b);
        }

        protected getPatientProperty(local: any, method: string): string {
            return (local !== undefined) ? local : Mel.mel.melFunc(method);
        }


    }

    class StringInternal extends String implements Interfaces.IInternalString {
        private _value: string;
        private _tag: string;

        constructor(value: string, tag?: string) {
            super(value);
            this._value = value;
            this._tag = tag;
        }

        //var sb = new String(value);

        // Function parse string object to array of string 
        public toList(seporator?: string): string[] {
            if (seporator === undefined) {
                seporator = '|';
            }

            let dataArray: string[] = this._value.split(seporator),
                index;
            /*jslint plusplus: true */
            for (index = 0; index < dataArray.length; index++) {
                if (dataArray[index].length === 0) {
                    dataArray.splice(index, 1);
                }
            }

            return dataArray;
        };

        // String helper function to validate that string start with specified string
        public startsWith(str: string): boolean {
            return this._value.slice(0, str.length) === str;
        };

        // String helper function to validate that string end with specified string
        public endsWith(str: string): boolean {
            return this._value.slice(-str.length) === str;
        };

        public get tag(): string {
            return (this._tag !== undefined) ? this._tag : '';
        }

        public toDate():Date {
            return new Date(this._value.toString());
        };

    }

}