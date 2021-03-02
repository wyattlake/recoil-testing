import Head from "next/head";
import styles from "styles/Home.module.css";
import { useForm } from "react-hook-form";

enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}

type FormInput = {
    firstName: string;
    lastName: string;
    gender: Gender;
};

export default function Login() {
    const { register, handleSubmit } = useForm<FormInput>();
    const onSubmit = (data: FormInput) => {
        console.log(data);
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Recoil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>This is a login.</h1>{" "}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstName" ref={register} />
                    <input name="lastName" ref={register} />
                    <select name="gender" ref={register}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <input type="submit" />
                </form>
            </main>
        </div>
    );
}
