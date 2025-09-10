<script>
  function loginAs(role) {
    const sessionMap = {
      admin: 'admin-session',
      contractor: 'contractor-session',
      subcontractor: 'subcontractor-session'
    };
    document.cookie = `session_id=${sessionMap[role]}; path=/`;
    location.href = '/dashboard';
  }
</script>

<h1>Login</h1>
<button on:click={() => loginAs('admin')}>Login as Admin</button>
<button on:click={() => loginAs('contractor')}>Login as Contractor</button>
<button on:click={() => loginAs('subcontractor')}>Login as Subcontractor</button>