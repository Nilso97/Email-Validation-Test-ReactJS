import { useState } from 'react';
import Button from "./Button";

function Form() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function formValidation(e) {
        e.preventDefault();

        setUserEmail(email);
    }

    function clear() {
        console.log("Limpeza de Tela em andamento...");

        return setTimeout(() => {
            setUserEmail("");
            console.log("Concluído!");
        }, 2000);
    }
    return (
        <>
            <form onSubmit={formValidation}>
                <h2>Validação de E-mail</h2>
                <input
                    type="email"
                    id="email"
                    htmlFor="email"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button />
                {userEmail && (
                    <div>
                        <p>E-mail: {userEmail}</p>
                        <button onClick={clear}>Limpar</button>
                    </div>
                ) 
                }
            </form>
        </>
    );
}

export default Form;