// import'./userList.css'
import styles from "./userList.module.css";
const UserList = ()=>{
    const Users =[
    {id:1,name:"gunjan",age:22},
    {id:2,name:"la",age:22},
    {id:3,name:"ww",age:22},
    ];
    return(
        <>
            <ul className={styles.list}>
                {
                    Users.map((item)=>{
                        return(
                            <li key={item.id} className={styles.listItems}> 
                                welcome, {item.name} and your age is {item.age}
                            </li>
                        );
                    }
                )
            }
            </ul>
        </>
    );
};
export default UserList;
// 3 ways to add styles
// style={{color:'blue',fontSize:"22px"}} inline Css
// className='li-list' HTML Css use this
// className={styles.listItems} React Css module