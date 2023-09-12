import { prismaVal } from "@/app/lib/prisma";
import { hash } from "bcrypt";
import Link from "next/link";
import styles from "./page.module.css";

function register() {
  async function registerUser(data: FormData) {
     'use server'

    console.log("Data", data);

    const password = await hash(data.get("password") as string, 12);
    const user = await prismaVal.user.create({
      data: {
        name: data.get("name") as string,
        email: data.get("email") as string,
        password,
      }
    });
  }
    return (
      <>
         <div className={styles.signUpBox}>
        <div className={styles.signUpHeading}>
          <h1>Sign Up</h1>
        </div>

          <form action={registerUser} className={styles.formBox}>
            <div className={styles.inputBox}>
              <label className="form-label">Name</label>
              <input className="form-control" name="name" required />
              <div id="name" className={styles.formText}>
                Please Enter your Name
              </div>
            </div>
            <div className={styles.inputBox}>
              <label className="form-label">Email address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                required
              />
              <div id="emailHelp" className={styles.formText}>
                We will never share your email with anyone else.
              </div>
            </div>
            <div className={styles.inputBox}>
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                required
              />
            </div>

            <button type="submit" className={styles.registerButton}>
              Register
            </button>
          </form>
          <div className={styles.loginLink}>Do you have account?
          <Link href="/api/auth/signin"><span className={styles.loginText}>Login</span></Link>
          </div>
          </div>
          
          
      
      </>
    );
  }
export default register;
