import './style.css';
import logoCronos from '../../assets/logoCronos.png';
import { FaCheck } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
function TeacherListPage (){
    const funcionarios = [
        { id: 1, nome: 'Ana Silva', matricula: 49223 },
        { id: 2, nome: 'Carlos Souza', matricula: 32555 },
        { id: 3, nome: 'Marina Lima', matricula: 67999 }
    ]
    return(
        <section>
            <aside>
                <img src={logoCronos} alt="Logo Cronos" />
                <div className="links">
                    <div className="linkComponent">
                        <FaAddressBook className='icons'/>
                        <p>Cadastro</p>
                    </div>
                    <div className="linkComponent">
                        <FaCheck className='icons'/>
                        <p>Selecione</p>
                    </div>
                    <div className="linkComponent">
                        <FaList className='icons'/>
                        <p>Lista</p>
                    </div>
                </div>
            </aside>
            <main>
                <div>
                    <h2>XX</h2>
                    <p>Professores cadastrados</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <th>Nome</th>
                            <label htmlFor="searchBar">Pesquisar...</label>
                            <input type="text" />
                            <th>Matrícula</th>
                        </thead>
                        <tbody>
                            <tr>
                               {/* <td>{funcionario.id}</td>
                                <td>{funcionario.nome}</td>
                                <td>{funcionario.cargo}</td>
                                {/* PASSO 2: Adicione a célula de dado correspondente aqui */}
                                <td>{funcionario.salario}</td>  */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </section>
    )
}
export default TeacherListPage;