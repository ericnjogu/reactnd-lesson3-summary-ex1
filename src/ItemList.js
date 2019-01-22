import React from 'react';

function ItemList (props) {
    return (
      <div>
        <div>
          <p className="items">{props.listHeading}</p>
          <ol className="item-list">
          {props.items.map((user, index) => <li key={props.keyProp(user)}>{props.formatItem(user)}</li>)}
        </ol>
          </div>
          <div>
            {/*<button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
            Delete Last Item
        </button>*/}
          </div>
		</div>
  );
}

export default ItemList