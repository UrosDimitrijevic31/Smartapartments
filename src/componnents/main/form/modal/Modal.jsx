import React from 'react';
import './Modal.scss';

export default Modal = () => {
    return (
        <div className="guests-modal">
            <div>
                <div>
                    <div>
                        <label htmlFor="group_adults">Odrasli</label>
                    </div>
                    <div>
                        <button>-</button>
                        <span>2</span>
                        <button>-</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <label htmlFor="group_adults">Deca</label>
                        <span>Uzrast 0-7</span>
                    </div>
                    <div>
                        <button>-</button>
                        <span>0</span>
                        <button>-</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <label htmlFor="group_adults">Jedinice</label>
                    </div>
                    <div>
                        <button>-</button>
                        <span>2</span>
                        <button>-</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}