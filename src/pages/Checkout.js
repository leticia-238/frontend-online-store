import React from 'react';
import { getCart } from '../services/cartFunctions';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      productCart: [],
    };
  }

  componentDidMount() {
    this.setState({ productCart: [...getCart()] });
  }

  render() {
    const { productCart } = this.state;
    return (
      <>
        <div>
          {
            productCart.map((produto) => (
              <div
                key={ produto[0] }
              >
                <h2>
                  { `${produto[0]} * ${produto[1].qtd} = ${produto[1].totalPrice}` }
                </h2>
              </div>
            ))
          }
        </div>
        <form>
          <label htmlFor="clientName">
            Nome:
            <input
              type="text"
              id="clientName"
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="clientEmail">
            Email:
            <input
              type="email"
              id="clientEmail"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="clientCpf">
            CPF:
            <input
              type="text"
              id="clientCpf"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="clientPhone">
            Telefone:
            <input
              type="tel"
              id="clientPhone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="clientCep">
            CEP:
            <input
              type="text"
              id="clientCep"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="clientAddress">
            Endereço:
            <input
              type="text"
              id="clientAddress"
              data-testid="checkout-address"
            />
          </label>
          <label htmlFor="payment1">
            <input
              type="radio"
              id="payment1"
              name="payment"
              value="Boleto"
            />
            Boleto
          </label>
          <label htmlFor="payment2">
            <input
              type="radio"
              id="payment2"
              name="payment"
              value="Cartão"
            />
            Cartão
          </label>
        </form>
        <button
          type="submit"
        >
          Finalizar compra
        </button>
      </>
    );
  }
}

export default Checkout;
