import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import * as Auth from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  getUserAttributes(): Observable<Auth.FetchUserAttributesOutput> {
    return defer(() => Auth.fetchUserAttributes());
  }

  updateUserAttributes(
    attributes: Auth.UpdateUserAttributesInput
  ): Observable<Auth.UpdateUserAttributesOutput> {
    return defer(() => Auth.updateUserAttributes(attributes));
  }
}
