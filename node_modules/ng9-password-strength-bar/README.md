# ng9-password-strength-bar

[![Build Status](https://travis-ci.org/rnadler/ng9-password-strength-bar.svg?branch=master)](https://travis-ci.org/rnadler/ng9-password-strength-bar)
[![npm version](https://badge.fury.io/js/ng9-password-strength-bar.svg)](https://badge.fury.io/js/ng9-password-strength-bar)

This an Angular 9+ implementation of [ng2-password-strength-bar](https://www.npmjs.com/package/ng2-password-strength-bar).

[Try it live!](https://plnkr.co/edit/z0x5gG?p=preview)

## Install in your project

`npm install ng9-password-strength-bar --save`

## Run the example application locally
- `git clone https://github.com/rnadler/ng9-password-strength-bar.git`
- `cd ng9-password-strength-bar`
- `npm install`
- `npm run build ng9-password-strength-bar`
- `npm run start ng9-password-strength-bar-app` # Open browser to http://localhost:4200

## Run the tests locally
- Same as above, except for the last step do:
- `npm run test ng9-password-strength-bar-app`  # Will run the tests once with the Firefox browser

## Using the Component
### Add Component to Module imports
```angular2html
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
//...
@NgModule({
 //...
   declarations: [
        AppComponent,
        //...
    ],
    imports: [
      BrowserModule,
      FormsModule,
      Ng9PasswordStrengthBarModule,
      //...
 //...
})
export class AppModule {}
```
### Add Component to your Application
```angular2html
@Component({
    selector: 'my-app',
    template: `
  <h3>Angular 2 Password Strength Bar</h3>
    <div>
       <form name="myForm" novalidate>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password"
                 [(ngModel)]="account.password" #password="ngModel"
                 minlength="5" maxlength="50" required>
            <ng9-password-strength-bar
                [passwordToCheck]="account.password"
                [barLabel]="barLabel"
                [customThresholds]="thresholds"
                [barColors]="myColors">
            </ng9-password-strength-bar>
        </form>
    </div>
  `,
})
```
```angular2html
export class App {
    public account = {
        password: <string>null
    };
    public barLabel: string = "Password strength:";
    public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
    public thresholds = [90, 75, 45, 25];
    // ...
}
```
## Parameters
```angular2html
<ng9-password-strength-bar
  [passwordToCheck]="account.password"
  [barLabel]="barLabel"
  [barColors]="myColors"
  [baseColor]="baseColor"
  [strengthLabels]="strengthLabels"
  [customThresholds]="thresholds"
  (onStrengthChanged)="strengthChanged($event)">
</ng9-password-strength-bar>
```
### Input Parameters
#### passwordToCheck (type: string)

- The variable containing the password to check.

#### barLabel (type: string)

- The variable containing the label displayed to the left of the bar.

#### barColors (type: Array\<string\>, optional)

- The variable can be used to define custom bar colors.<br>
- This must be an Array of 5 strings.<br>
- Lowest security level picks `colors[0]`, ..., the highest picks `colors[4]`.<br>
- If not specified, the default is: `['#F00', '#F90', '#FF0', '#9F0', '#0F0']`

#### baseColor (type: string, optional)

- The variable can be used to define the color of bars when no strength is applied (i.e. when there is no password text).<br>
- If not specified, the default is: '#DDD'.<br>
For example:
```angular2html
public baseColor = '#FFF';
```

#### strengthLabels (type: Array\<string\>, optional)

- The variable can be used to define a strength label that will be appended to the colored bars.<br>
- This must be an Array of 5 strings.<br>
For example:
```angular2html
public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];
```

#### customThresholds (type: Array\<number\>, optional)

- The variable can be used to define custom strength algorithm thresholds.<br>
- This must be an Array of 4 integers. See the source code for details on how these values are used.<br>
- If not specified, the default is: `[90, 70, 40, 20]`

### Output Parameters

#### onStrengthChanged(strength: number) optional
- Event triggered when the password changes.
- Takes a single number parameter (the new password strength with value 0 to 4).
```angular2html
strengthChanged(strength: number) {
  this.strength = strength;
}
```

### License

[MIT](https://tldrlegal.com/license/mit-license)

