import '../../../../styles/members/join_modal01.css';
const Join_Modal01 = ({closeModal}) => {
    return (
        <div className="Join_Modal01">
            <div className="modal_cover">
                <div className="modal">
                    <h3 className="Modal_01_Title">이용약관</h3>
                    <div className="content">
                        <strong>제1장 총칭</strong>
                        <p><br />
                            제1조&#40;목적&#41; <br />
                            <br />
                            이 약관은 &#40;주&#41;티피티컨셉&#40;이하 &quot;회사&quot;라 한다&#41;에서 운영하는 티비티컨셉 사이버 몰 <br />
                            &#40;https&#58;&#47;&#47;www.tbtconcept.co.kr&#41;이 제공하는 인터넷관련 서비스 &#40;이하&quot;서비스&quot;라 한다&#41;를 <br />
                            이용함에 있어 가입조건 및 이용에 관한 제반 사항과 기타 필요사항, 회원과 회사간의 권리, 의무, 책임사항 및 회원의 서비스 이용절차 등에 관한 사항을 구체적으로 규정함을
                            목적으로 합니다. <br />
                            &#8903;PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.&#8903; <br /> <br /> 제2조&#40;용어의 정의&#41; <br /> <br />
                            1.&quot;사이트&quot; 라 함은 &quot;회사&quot;가 재화 또는 용역&#40;이하 &quot;재화 등&quot;이라 함&#41;을 이용자에게 제공하기 위하여 컴퓨터 등 <br />
                            정보통신설비를 이용하여 &quot;재화 등&quot;을 거래할 수 있도록 설정한 가상의 영업장 및 사이버몰을 운영하는 사업자의 의미로도 사용합니다. <br /> <br />
                            2.&quot;이용자&quot;란 &quot;회사&quot;에 접속하여 이 약관에 따라&quot;회사&quot;가 제공하는 서비스를 받는 회원 및 비회원을 말합니다. <br />
                            &#8903; 단, 법인이나 회사명의 등으로 서비스 이용은 불가능합니다. &#8903;
                            <br /> <br />
                            3.&#39;회원&#39;이라 함은 &quot;회사&quot;에 개인정보를 제공하여 회원등록을 한 자로서, &quot;회사&quot;의 정보를 지속적으로 제공받으며, <br />
                            &quot;회사&quot;가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. <br /> <br />
                            제3조&#40;약관의 명시와 설명 및 개정&#41; <br /> <br />
                            1.&quot;회사&quot;는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소&#40;소비자의 불만을 처리할 수 있는 곳의 주소를 포함&#41;, 전화번호, 모사전송번호,
                            전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보 관리책임자 등을 회원이 쉽게 알 수 있도록 <br />
                            &quot;사이트&quot;의 초기 서비스화면&#40;전면&#41;에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다. <br /> <br />
                            2.&quot;회사&quot;는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은 <br />
                            중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다. <br /> <br />
                            3.&quot;회사&quot;는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진 등에 관한 법률, 방문판매 등에 관한
                            법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                        </p>
                    </div>
                    <div className="modal_close_btn1">
                        <button className='modal_close_button1' onClick={()=>{closeModal('joinModal_1')}}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join_Modal01;