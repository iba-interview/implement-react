import { EditorProps } from './EditorProps';

export function Editor(props: EditorProps) {
  return (
    <div className='p-4'>
      {props.disabled ? <div>Currently Offline</div> : null}
      <textarea className='w-full' rows={10}></textarea>
      {
        /*
        * Display buffered content here
        * */
      }
    </div>
  );
}
