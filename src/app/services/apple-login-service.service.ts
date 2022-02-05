import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppleLoginServiceService {

  private readonly appleScriptUrl: string = `https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js`;
private ready: Promise<boolean> = new Promise(resolve => {
if (typeof window !== undefined) {
        const script = require("scriptjs");
        script(this.appleScriptUrl, () => resolve(true));
} else {
        resolve(false);
    }
});
constructor() {
    this.ready.then(isReady => {
        if (isReady) {
            // this.init();
        }
    });
}

}
