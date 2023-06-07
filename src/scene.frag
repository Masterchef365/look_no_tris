#version 450
precision mediump float;

//uniform mat4 transf;
//uniform mat4 extra;

in vec4 f_color;
in mat4 iv;
in vec3 cam_pos;

out vec4 out_color;

// Ray-sphere intersection test:
// returns -1 if no hit,
// positive ray parameter t otherwise.
float sphere(vec3 ray, vec3 pos, float r) {
    float proj = dot(ray, pos);
    float disc = proj*proj - dot(pos, pos) + r*r;
    if (disc >= 0.) {
    	return proj - sqrt(disc);    
    } else {
        return -1.;
    }   
}

void main() {
    vec2 uv = f_color.xy;
    vec3 screenspace_ray = vec3(uv * 2. - 1., 0.2);
    vec3 ray = normalize((iv * vec4(screenspace_ray, 1)).xyz);

    float hit = sphere(ray, vec3(-0.280,0.240,(0.872)) - cam_pos,1.);
    vec3 color = vec3(fract(hit*88.) > 0.3);

    out_color = vec4(color,1);
}

