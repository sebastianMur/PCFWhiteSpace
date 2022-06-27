import { useState, useEffect } from 'react';

export const UpdateWhitespace = (props: any) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.id) {
      props.context.webAPI
        .updateRecord('swo_whitespace', props.id, props.data)
        .then(
          (res: any) => {
            setResponse(res);
            setLoading(false);
          },
          (error: any) => {
            console.error(
              'error updating the field (swo_iswhitespaceupdated)',
              error,
            );
            setError(error);
          },
        );
    }
  }, []);

  return JSON.stringify(response);
};
