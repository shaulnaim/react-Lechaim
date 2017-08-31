import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';


 const deleteRepresentative = (id,onRemove) => {
   $('#item'+id).addClass('animated hinge');
   setTimeout(() => {
       onRemove(id);
   }, 1000); 
  };


 const selectRepresentative = (id,onSelect) => {
    onSelect(id);
};

const RepresentativeItem = ({ representative, onRemove, onSelect }) => (
      <li id ={`item${representative.id}`} style={{ listStyle:'none'}}>
            <div>
                <section>
                <Link to={`/representatives/${representative.id}`} >
                        <div  onClick={selectRepresentative.bind(this, representative.id,onSelect)} className="panel-body">
                            <div className="photo">
                                <img   alt= "no pic" width="150" height="150" src={representative.avatar} />
                            </div>
                            <div className="user-info">
                                <div>
                                    <h1>{representative.name}</h1>
                                    <h3>Email: {representative.email}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="deleteBtn" >
                        <a onClick={deleteRepresentative.bind(this, representative.id,onRemove)} className="btn  btn-danger" role="button" > מחק נציג  </a>
                    </div>
                </section>
            </div>
      </li>

    );


    RepresentativeItem.propTypes = {
        representatives: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            age: PropTypes.number,
            name: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
            region: PropTypes.string.isRequired,
            Gender: PropTypes.string,
            avatar: PropTypes.string
        })
        ),
        onRemove: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
      }

export default RepresentativeItem;