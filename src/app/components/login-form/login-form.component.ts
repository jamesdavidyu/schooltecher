import { Component } from "@angular/core";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from "@spartan-ng/ui-card-helm";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { AuthenticationService } from "../../services/authentication.service";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";
import { HlmFormFieldModule } from "@spartan-ng/ui-formfield-helm";
import {
  Form,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmFormFieldModule,
  ],
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.css",
  providers: [AuthenticationService],
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.form = this.fb.group({
      username: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authenticationService.login(this.form.value).subscribe({
        next: (response) => console.log("Success: ", response),
        error: (error) => console.error("Error: ", error),
      });
    }
  }
}
