import React from 'react';

function ItemList (props) {
    return (
      <div>
        <div>
          <p className="items">Items</p>
          <ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
        {/*using (event) => this.props.deleteLastItem did not work*/}
          </div>
          <div>
        <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
            Delete Last Item
        </button>
          </div>
		</div>
  );
}

export default ItemList