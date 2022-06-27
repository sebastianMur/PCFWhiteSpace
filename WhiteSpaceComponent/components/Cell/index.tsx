import * as React from 'react';
import { Wrapper } from './wrapper';
import useApi from '../../hooks/ApiCalls';
import { OpenQuickCreateForm } from '../../services/whitespace details/openquickcreateform';
import { OpenWhitespaceMainForm } from '../../services/whitespace details/openmainform';

export const Cell = (props: any) => {
  let cellstyle = { bgcolor: '', color: '' };
  const { context, bc } = props;
  const openMainForm = useApi(OpenWhitespaceMainForm);
  const openQuickCreateForm = useApi(OpenQuickCreateForm);
  const openQuickCreateOrMainForm = (
    e: any,
    whitespaceid: string,
    portfoliolineforwhitespaceid: string,
    portfolioLineforWhitespacename: string,
  ) => {
    e.preventDefault();
    console.log(whitespaceid);
    console.log(portfoliolineforwhitespaceid);
    console.log(portfolioLineforWhitespacename);

    if (whitespaceid) {
      openMainForm.request(context, whitespaceid);
    } else {
      openQuickCreateForm.request(
        context,
        portfoliolineforwhitespaceid,
        portfolioLineforWhitespacename,
      );
    }
  };

  const styles = [
    { bgcolor: '#469d69', color: 'white' },
    { bgcolor: '#43454b', color: 'white' },
    { bgcolor: '#fdb957', color: 'white' },
    { bgcolor: 'white', color: 'black' },
  ];

  if (bc === 'Organization') cellstyle = styles[0];
  if (bc === 'Potential') cellstyle = styles[1];
  if (bc === 'Competitor') cellstyle = styles[2];

  return (
    <Wrapper key={props.id} lc={cellstyle.color} bc={cellstyle.bgcolor}>
      <div
        key={props.id}
        id={props.id}
        onClick={(e: any) =>
          openQuickCreateOrMainForm(
            e,
            props.id,
            props.portfolioLineforWhitespaceid,
            props.portfolioLineforWhitespacename,
          )
        }
      >
        {props.name}
      </div>
    </Wrapper>
  );
};
