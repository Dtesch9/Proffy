import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://api.adorable.io/avatars/55/abott@adorable.png"
          alt="Douglas Tesch"
        />
        <div>
          <strong>Douglas Tesch</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores químicas do Brasil brasileiro ou até mesmo do
        mundo
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
