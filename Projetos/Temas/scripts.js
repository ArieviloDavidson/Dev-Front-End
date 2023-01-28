function claro() {
    const il = document.querySelector('.lampada');
    const id = document.querySelector('.dark');
    const ig = document.querySelector('.green');
    const ii = document.querySelector('.indigo');
    const corpo = document.querySelector('.corpo');
    il.style.display = 'flex';
    id.style.display = 'none';
    ig.style.display = 'none';
    ii.style.display = 'none';
    corpo.style.backgroundColor = 'white';
}

function escuro() {
    const il = document.querySelector('.lampada');
    const id = document.querySelector('.dark');
    const ig = document.querySelector('.green');
    const ii = document.querySelector('.indigo');
    const corpo = document.querySelector('.corpo');
    il.style.display = 'none';
    id.style.display = 'flex';
    ig.style.display = 'none';
    ii.style.display = 'none';
    corpo.style.backgroundColor = 'black';
}

function verde() {
    const il = document.querySelector('.lampada');
    const id = document.querySelector('.dark');
    const ig = document.querySelector('.green');
    const ii = document.querySelector('.indigo');
    const corpo = document.querySelector('.corpo');
    il.style.display = 'none';
    id.style.display = 'none';
    ig.style.display = 'flex';
    ii.style.display = 'none';
    corpo.style.backgroundColor = '#407855';
}

function indigo() {
    const il = document.querySelector('.lampada');
    const id = document.querySelector('.dark');
    const ig = document.querySelector('.green');
    const ii = document.querySelector('.indigo');
    const corpo = document.querySelector('.corpo');
    il.style.display = 'none';
    id.style.display = 'none';
    ig.style.display = 'none';
    ii.style.display = 'flex';
    corpo.style.backgroundColor = '#4052AB';
}