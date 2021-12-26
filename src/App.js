import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
      <div class="card text-center shadow-2xl">
      <figure class="px-10 pt-10">
        <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl"/>
      </figure> 
      <div class="card-body">
        <h2 class="card-title">shadow, center, padding</h2> 
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
        <div class="justify-center card-actions">
          <button class="btn btn-outline btn-accent">More info</button>
        </div>
      </div>
    </div> 
    </div>
  );
}

export default App;
