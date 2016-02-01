/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var FormButtonsBar = require( 'components/forms/form-buttons-bar' ),
	FormButton = require( 'components/forms/form-button' ),
	Gridicon = require( 'components/gridicon' );

module.exports = React.createClass( {
	displayName: 'SecurityCheckupManageContactButtons',

	propTypes: {
		isSavable: React.PropTypes.bool,
		isDeletable: React.PropTypes.bool,
		saveText: React.PropTypes.string,
		onSave: React.PropTypes.func.isRequired,
		onCancel: React.PropTypes.func.isRequired,
		onDelete: React.PropTypes.func.isRequired
	},

	render: function() {
		return (
			<FormButtonsBar>
				<FormButton
					disabled={ ! this.props.isSavable }
					onClick={ this.props.onSave }>
					{ this.props.saveText ? this.props.saveText : this.translate( 'Save' ) }
				</FormButton>

				<FormButton
					isPrimary={ false }
					onClick={ this.props.onCancel }
					>
					{ this.translate( 'Cancel' ) }
				</FormButton>

				{
					this.props.isDeletable
					? (
						<button className={ 'security-checkup-contact__remove' } onClick={ this.props.onDelete }>
							<Gridicon icon="trash" size={ 24 } />
							<span>{ this.translate( 'Remove' ) }</span>
						</button>
					)
					: null
				}
			</FormButtonsBar>
		);
	}
} );
