import Comment from '../card-comment/card-comment';
import FormEdit from '../../../common/form-edit/form-edit';
import useCardContext from '../../../../hooks/context/use-card-context';
import { addCommentAction } from '../../../../context/card/actions';
import useIsAuth from '../../../../hooks/context/use-is-auth';

import './card-comments.scss';

const CardComments = () => {
  const { card, dispatchCard } = useCardContext();
  const { user } = useIsAuth();

  const addComent = (comment: string): void => {
    dispatchCard(addCommentAction({ comment, cardId: card.id, user }));
  };

  return (
    <div className="card__comments">
      <h3 className="card-title">Comments</h3>

      <div className="add-comment">
        <div className="add-comment__avatar">
          <img src="https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Boo" alt="avatar" />
        </div>

        <FormEdit handleChange={addComent} placeholder="Enter a comment..." clear={true} />
      </div>

      <div className="card__comments-container">
        {card.comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default CardComments;
