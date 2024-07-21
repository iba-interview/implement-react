import { useEffect } from 'react';
import { NotificationStream } from './NotificationStream';
import { Description } from './Description';
import { KEY } from '../../mock/notification';
import { Button } from 'primereact/button';

const reset = () => {
  localStorage.removeItem(KEY);
  window.location.reload();
};

export function Notification() {
  useEffect(() => {
    const source = NotificationStream.getSource();
    source.addEventListener('notification', (event) => {
      console.log(JSON.parse(event.data));
    });
    source.onerror = () => {
      console.error('EventSource failed');
    };

    return () => {
      source.close();
    };
  }, []);
  return (
    <div style={{ paddingLeft: 300 }}>
      <h1>Notification</h1>
      <Description />
      <Button label='Reset' onClick={reset} />
    </div>
  );
}
