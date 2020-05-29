import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference, calculateBrand, getPlanIncrease } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: #de3b3bed;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = () => {
  const [dataForm, setDataForm] = useState({
    brand: '',
    year: '',
    plan: '',
  });
  // State en caso de error
  const [error, setError] = useState(false);

  // Extraer los valores del state
  const { brand, year, plan } = dataForm;

  // Leer los datos del formulario y colocarlos en el state
  const getFormInfo = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  // Cuando el usuario presiona submit
  const quoteInsurance = (event) => {
    event.preventDefault();

    //Validación de campos
    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    // Base inicial de seguro (2000)
    let result = 2000;

    //Obtener la diferencia de años.
    const yearDifference = getYearDifference(year);

    //Por cada año hay que restar el 3%
    result -= (yearDifference * 3 * result) / 100;

    /* Incremento por marca a su valor actual
        Americano 15 %
        Asiatico 5 %
        Europeo 30%
    */
    result = calculateBrand(brand) * result;

    /* Incremento por plan a su valor actual
        Básico 20 %
        Completo 50 %
    */
    const planIncrease = getPlanIncrease(plan);
    result = parseFloat(planIncrease * result).toFixed(2);
    console.log(result);

    // Total
  };

  return (
    <form onSubmit={quoteInsurance}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label htmlFor="brand">Brand</Label>
        <Select name="brand" value={brand} id="brand" onChange={getFormInfo}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asiatic">Asiatic</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="year">Year</Label>
        <Select name="year" value={year} id="year" onChange={getFormInfo}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio type="radio" name="plan" id="basic" value="basic" checked={plan === 'basic'} onChange={getFormInfo} />
        <Label htmlFor="basic">Basic</Label>
        <InputRadio type="radio" name="plan" id="complete" value="complete" checked={plan === 'complete'} onChange={getFormInfo} />
        <Label htmlFor="complete">Complete</Label>
      </Field>

      <Button type="submit">Quote</Button>
    </form>
  );
};

export default Form;
