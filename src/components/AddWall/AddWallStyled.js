import styled from 'styled-components';

export const HomeWallContainer = styled.div`
	background: #fff;
	margin: 10px 0px 10px 10px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const WallProfile = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 5px;
	background: url(${props => props.back});
	background-size: cover;
	background-position: center;
`;

export const WallAddText = styled.textarea`
	white-space: nowrap;
	resize: none;
	height: auto;
	border: none;
	outline: none;
	margin-left: 10px;
	font-size: 14px;
	color: #333;
	width: 70%;
	padding: 10px 0 0 0;
`;

export const AddPanel = styled.div`
	animation: top 0.4s ease-in-out;
	align-items: center;
	display: flex;
	justify-content: space-between;
	background: #fafbfc;
	border-top: 1px solid #e7e8ec;
	border-radius: 0 0 2px 2px;
	padding: 10px 15px 10px 15px;
`;

export const SendAdd = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const AddTitle = styled.div`
	padding: 10px 10px 5px 10px;
	display: flex;
`;

export const AddIconsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20%;
`;

export const AddSmileContainer = styled.div`
	animation: opacity 0.4s ease;
	display: flex;
	justify-content: flex-end;
	width: 20%;
`;

export default {
	HomeWallContainer,
	AddSmileContainer,
	AddIconsContainer,
	WallProfile,
	WallAddText,
	AddPanel,
	AddTitle,
	SendAdd,
};