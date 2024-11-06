1. Подготовить сервер
2. В папке проекта создать клиентскую часть командой: npx degit Elbrus-Bootcamp/vite-react-ts client
3. Перейти в папку `client` и установить все необходимые зависимости, установить axios, react-router-dom, zod, react-bootstrap bootstrap
4. Создать в src/ папку services и в ней базовый axiosInstance
   `import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: '/api',
});
export default axiosInstance;`
5. Создать в src/ папку `utils` и описать в файле validators.ts схему на основе zod
6. Создать в src/ папку `types` и описать в файле postTypes.ts необходимые типы
7. В папке `services` создать файл postService.ts и описать класс PostService с необходимыми методами. Экспортировать экземплят класса с переданным в конструктор axiosInstance
8. Получить с помощью экзаменляра PostService и useEffect() посты на странице PostPage.tsx

`КОНТЕКСТ`

9. Создать в src/ папку contexts
10. Описать в <postTypes.ts> новые типы для PostActionType и PostHandlerType:

```
export type PostActionType =
  | { type: 'SET_POSTS'; payload: PostTypeDb[] }
  | { type: 'ADD_POST'; payload: PostTypeDb }
  | { type: 'DELETE_POST'; payload: PostTypeDb['id'] };
```

```
export type PostHandlerType = {
    submitHandler: (dataForm: PostTypeForm) => Promise<void>,
    deleteHandler: (id: PostTypeDb['id']) => Promise<void>
  }
```

11. Создать в contexts/ файл <PostContext.ts> и написать функции создания контекста для данных и для функций-хендлеров

- `export const PostContext = createContext<PostTypeDb[]>([]);`
- `export const PostContextHandler = createContext<PostHandlerType | null>(null);`

12. Создать contexts/ файл <PostReducer.ts> и описать в нем возможные действия с постами

```
const postReducer: React.Reducer<PostTypeDb[], PostActionType> = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_POSTS':
      return payload;
    case 'ADD_POST':
      return [payload, ...state];
    case 'DELETE_POST':
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default postReducer;
```

13. Создать в contexts/ файл <PostContextProvider.tsx > и использовать в нем postReducer и dispatch для написания хэндлеров

```function PostContextProvider({
 children,
}: {
 children: React.ReactElement;
}): JSX.Element {
 const [initPosts, dispatch] = useReducer(postReducer, []);
 useEffect(() => {
   postService
     .getPosts()
     .then((data) => dispatch({ type: 'SET_POSTS', payload: data }))
     .catch(console.log);
 }, []);

 const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
   e.preventDefault();
   const dataForm = Object.fromEntries(new FormData(e.currentTarget));
   const newPost = await postService.addPost(dataForm);
   dispatch({ type: 'ADD_POST', payload: newPost });
   e.target.reset();
 };

 const deleteHandler = async (id: PostTypeDb['id']): Promise<void> => {
   try {
     await postService.deletePost(id);
     dispatch({ type: 'DELETE_POST', payload: id });
   } catch (error) {
     console.log(error);
   }
 };

 return (
   <PostContext.Provider value={initPosts}>
     <PostContextHandler.Provider value={{ submitHandler, deleteHandler }}>
       {children}
     </PostContextHandler.Provider>
   </PostContext.Provider>
 );
}
export default PostContextProvider;

```

14. Создать в файле <PostContextProvider.tsx> функцию для получения хендлеров из контекста

```
export const usePostContext = (): PostHandlerType => {
  const handlers = useContext(PostContextHandler);
  if (!handlers) {
    throw new Error('no handlers context');
  }
  return handlers;
};
```

14. Обернуть RouterProvider в <App.tsx> в PostContextProvider

```
<PostContextProvider>
    <RouterProvider router={router} />;
</PostContextProvider>
```

15. Получить в <PostPage> и <StatPage.tsx> посты с помощью хука useContext
    `const posts = useContext<PostTypeDb[]>(PostContext)`
16. Получить в <PostCard>
    `const {deleteHandler} = usePostContext()`
17. Получить в <PostForm>
    `const { submitHandler } = usePostContext();`
