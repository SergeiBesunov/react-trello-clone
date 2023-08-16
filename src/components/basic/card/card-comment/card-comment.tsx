import { FC, useState } from 'react';
import FormEdit from '../../../common/form-edit/form-edit';
import { updatedCommentAction, deleteCommentAction } from '../../../../context/card/actions'
import useCardContext from '../../../../hooks/context/use-card-context';

import './card-comment.scss';


interface ICommentProps {
  id: string | number;
  author: string;
  photoUrl: string;
  text: string;
}

const Comment: FC<ICommentProps> = ({ id, author, photoUrl, text }) => {
  const {dispatchCard} = useCardContext();
  const [editing, setEditing] = useState<boolean>(false);
 
  const updatedComment = (value: string):void => {
   dispatchCard(updatedCommentAction({value, id}))
  };

  const deleteComment = ():void => {
   dispatchCard(deleteCommentAction(id))
  }

  return (
    <article className="comment">
      <div className="comment__user">
        <img className="comment__user-avatar" src={photoUrl} alt="avatar" />
        <h6 className="comment__user-name">{author}</h6>
      </div>
      <div>
        {editing ? (
          <FormEdit handleChange={updatedComment} closeForm={() => setEditing(false)} defaultValue={text} placeholder='...'/>
        ) : (
          <>
            <p className="comment__text">{text}</p>
            <div className="comment__block-control">
              <button className="comment__btn" onClick={() => setEditing(true)}>
                Change
              </button>
              <button className="comment__btn" onClick={deleteComment}>Delete</button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default Comment;
